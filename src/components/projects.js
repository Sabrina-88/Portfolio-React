//project

import React , { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle,  CardActions, Button} from 'react-mdl';

class Project extends Component {
	constructor(props){
		super(props);
		this.state = { activeTab: 0 };
	}
	toggleCategories(){
		if(this.state.activeTab === 0){
			return(
				<section>
				<div className="portfolio">
				<Card shadow={5} className="Card" >
					<CardTitle className="CardTitle" id="portfolio1" >
						exemplo 1
					</CardTitle>
					{/*<CardText>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum.		
					</CardText*/}
					<CardActions border>
					<Button colored>Github</Button>
					<Button colored>Link</Button>
					</CardActions>	
				</Card>
				
				<Card shadow={5} className="Card" >
					<CardTitle className="CardTitle" id="portfolio2" >
						exemplo 1
					</CardTitle>
					<CardActions border>
					<Button colored>Github</Button>
					<Button colored>Link</Button>
					</CardActions>	
				</Card>

				<Card shadow={5} className="Card" >
					<CardTitle className="CardTitle" id="portfolio1" >
						exemplo 1
					</CardTitle>
					<CardActions border>
					<Button colored>Github</Button>
					<Button colored>Link</Button>
					</CardActions>	
				</Card>
				</div>
				<div className="portfolio">
				<Card shadow={5} className="Card" >
					<CardTitle className="CardTitle" id="portfolio1" >
						exemplo 1
					</CardTitle>
					{/*<CardText>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum.		
					</CardText*/}
					<CardActions border>
					<Button colored>Github</Button>
					<Button colored>Link</Button>
					</CardActions>	
				</Card>
				
				<Card shadow={5} className="Card" >
					<CardTitle className="CardTitle" id="portfolio2" >
						exemplo 1
					</CardTitle>
					<CardActions border>
					<Button colored>Github</Button>
					<Button colored>Link</Button>
					</CardActions>	
				</Card>

				<Card shadow={5} className="Card" >
					<CardTitle className="CardTitle" id="portfolio1" >
						exemplo 1
					</CardTitle>
					<CardActions border>
					<Button colored>Github</Button>
					<Button colored>Link</Button>
					</CardActions>	
				</Card>
				</div>
				</section>
			)
		}
		else if(this.state.activeTab === 1){
			return(
				<Card shadow={10} className="Card" >
					<CardTitle className="CardTitle" id="portfolio3" >
						exemplo 1
					</CardTitle>
					<CardActions border>
					<Button colored>Github</Button>
					<Button colored>Link</Button>
					</CardActions>
					
				</Card>
			)
		}
		else if (this.state.activeTab === 2){
			return(
				<div><h1>this is Jquery</h1></div>
			)
		}
	}

render (){
	return(
		<div className="category-tabs">
			<Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab:tabId})} ripple>
				<Tab>Todos</Tab>
				<Tab>BootStrap</Tab>
				<Tab>Javascript</Tab>
				<Tab>Jquery</Tab>
				
			</Tabs>
			<section>
			<Grid>
			<Cell col={12}>
				
			</Cell>
			</Grid>
				<div className="content">{this.toggleCategories()}</div>

			</section>
		</div>
		)
}
}

export default Project;