
import axios from 'axios';
import sattelliteList from '../utils/data'
import { getVisibleSatellites } from 'tle.js';
import jspredict from 'jspredict';

axios.defaults.baseURL = 'http://localhost:3000';

function degrees_to_radians(degrees) {
	var pi = Math.PI;
	return degrees * (pi/180);
}

const getXYZ = (radius, elevation, azimuth) => {
	const x = radius * Math.sin(degrees_to_radians(elevation)) * Math.cos(degrees_to_radians(azimuth));
	const y = radius * Math.sin(degrees_to_radians(elevation)) * Math.sin(degrees_to_radians(azimuth));
	const z = radius * Math.cos(degrees_to_radians(elevation));
	return {x, y, z};
}

const RADIUS = 500;

export default {
    get(data){
        return axios.get("/", {params: data});
    },
    async list(){
		// const docs = [];
		// let page = 1;
		// let end = false;
		// while(!end) {
		// 	const { data } = await axios.get('/', {
		// 		params: {
		// 			'page-size': 100,
		// 			page
		// 		}
		// 	});
		// 	if(data.member.length == 0) {
		// 		end = true;
		// 		break;
		// 	}
		// 	docs.push(...data.member);
		// 	page++;
		// }
		// return docs;

		const lat = -15.7447213;
		const lng = -48.1757154;
		const height = 0;

		const visibleSattelites = getVisibleSatellites({
			observerLat: lat,
			observerLng: lng,
			observerHeight: height,
			tles: sattelliteList.map(sattelite => [sattelite.name, sattelite.line1, sattelite.line2]),
			elevationThreshold: 70,
			timestampMS: Date.now()
		});

		return visibleSattelites.map(sattelite => {
			console.log(sattelite.info.elevation, sattelite.info.azimuth);
			return {
				name: sattelite.tleArr[0],
				...getXYZ(RADIUS, sattelite.info.elevation, sattelite.info.azimuth)
			}
		});
    },
    searchByName(name, data){
        return axios.get(`/${name}`, {params: data});
    },
    searchBySatelliteNumber(number, data){
        return axios.get(`/${number}`, {params: data});
    },
}