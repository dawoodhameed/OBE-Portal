import React, { Component } from 'react';
import { VectorMap } from 'react-jvectormap';

export default class OurCentre extends Component {
	render() {
		return (
			<>
				<div className="section-body">
					<div className="container-fluid">
						<div className="d-flex justify-content-between align-items-center ">
							<div className="header-action">
								<h1 className="page-title">Our Centres</h1>
								<ol className="breadcrumb page-breadcrumb">
									<li className="breadcrumb-item"><a href>Ericsson</a></li>
									<li className="breadcrumb-item active" aria-current="page">Our Centres</li>
								</ol>
							</div>
						</div>
					</div>
				</div>
				<div className="section-body mt-4">
					<div className="container-fluid">
						<div className="row">
							<div className="col-12">
								<div className="card">
									<div className="card-body">
										{/* <div id="world-map-markers" style={{ height: "400px" }}></div> */}
										<VectorMap
											ref="map"
											containerStyle={{
												height: '400px'
											}}
											map={'world_mill'}
											backgroundColor='transparent'
											borderColor='#fff'
											borderOpacity={0.25}
											borderWidth={0}
											color='#e6e6e6'
											regionStyle={{ initial: { fill: '#4D5052' } }}
											markerStyle={{
												initial: {
													r: 5,
													'fill': '#fff',
													'fill-opacity': 1,
													'stroke': '#000',
													'stroke-width': 1,
													'stroke-opacity': 0.4
												},
											}}
											markers={[{
												latLng: [21.00, 78.00],
												name: 'INDIA : 350'

											},
											{
												latLng: [-33.00, 151.00],
												name: 'Australia : 250'

											},
											{
												latLng: [36.77, -119.41],
												name: 'USA : 250'

											},
											{
												latLng: [55.37, -3.41],
												name: 'UK   : 250'

											},
											{
												latLng: [25.20, 55.27],
												name: 'UAE : 250'

											}]}
											series={{
												regions: [{
													values: {
														"US": '#28a745',
														"SA": '#28a745',
														"AU": '#28a745',
														"IN": '#28a745',
														"GB": '#28a745',
													},
													attribute: 'fill'
												}]
											}}
											hoverOpacity={null}
											normalizeFunction='linear'
											zoomOnScroll={false}
											scaleColors={['#000000', '#000000']}
											selectedColor='#000000'
											selectedRegions={[]}
											enableZoom={false}
											hoverColor='#fff'
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}
