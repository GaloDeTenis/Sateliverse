
import axios from 'axios';
import sattelliteList from '../utils/data';
import * as satellite from 'satellite.js';

import { getSatelliteName, getVisibleSatellites, getClassification } from 'tle.js';

axios.defaults.baseURL = 'http://localhost:3000';

function getPosition() {
	return new Promise((resolve, reject) => {
		if (navigator.geolocation) {
			return navigator.geolocation.getCurrentPosition(position => {
				resolve({
					lat: position.coords.latitude,
					lng: position.coords.longitude
				})
			}, () => {
				resolve({ lat: 0, lng: 0 });
			});
		}
		else {
			resolve({ lat: 0, lng: 0 });
		}
	})
}

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

		const { lat, lng } = await getPosition();
		const height = 500;

		return getVisibleSatellites({
			observerLat: lat,
			observerLng: lng,
			observerHeight: height,
			tles: sattelliteList.map(sattelite => [sattelite.name, sattelite.line1, sattelite.line2]),
			elevationThreshold: 75,
			timestampMS: Date.now()
		}).map((sat) => {
			const date = new Date();
			var satrec = satellite.twoline2satrec(sat.tleArr[1], sat.tleArr[2]);
			var positionAndVelocity = satellite.propagate(satrec, date)
			var positionEci = positionAndVelocity.position;
			var observerGd = {
				longitude: satellite.degreesToRadians(lat),
				latitude: satellite.degreesToRadians(lng),
				height
			};
			var gmst = satellite.gstime(date);
			var positionEcf = satellite.eciToEcf(positionEci, gmst);
			var observerEcf = satellite.geodeticToEcf(observerGd);
			console.log(observerEcf);
			const { x, y, z } = positionEcf;
			return {
				name: getSatelliteName(sat.tleArr),
				classification: getClassification(sat.tleArr),
				x, y, z
			}
		});


		// .map(sattelite => ({
		// 	name: sattelite.tleArr[0],
		// 	phi: sattelite.info.azimuth,
		// 	theta: sattelite.info.elevation
		// }));
    },
    searchByName(name, data){
        return axios.get(`/${name}`, {params: data});
    },
    searchBySatelliteNumber(number, data){
        return axios.get(`/${number}`, {params: data});
    },
}