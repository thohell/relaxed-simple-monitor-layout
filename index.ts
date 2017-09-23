// Copyright (C) 2017 Thomas Hellström <rel@xed.se>
//
// This file is part of relaxed-simple-monitor-layout.
//
// relaxed-simple-monitor-layout is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// relaxed-simple-monitor-layout is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with relaxed-simple-monitor-layout.  If not, see <http://www.gnu.org/licenses/>.
//

export class Monitor_t {
	name: string;
	primary: boolean;
	layout: {
		height: number;
		width: number;
		top: number;
		left: number;
	};
}
export function getMonitorLayout(): Monitor_t[] {
	let r: Monitor_t[] = [];

	require('child_process').execSync('xrandr')
		.toString()
		.split('\n')
		.forEach((element: string) => {
			if (RegExp(/\d*x\d*\+\d*\+\d*/).test(element)) {
				let name = element.split(' ')[0]
				let primary = false;
				element.split(' ').forEach((elem: string) => {
					if (elem === 'primary') {
						primary = true;
					}
					if (RegExp(/\d*x\d*\+\d*\+\d*/).test(elem)) {
						r.push({
							name: name,
							primary: primary,
							layout: {
								width: Number(elem.split('x')[0]),
								height: Number(elem.split('x')[1].split('+')[0]),
								top: Number(elem.split('+')[2]),
								left: Number(elem.split('+')[1])
							}
						});
					}
				})
			}
		})
	return r;
}
