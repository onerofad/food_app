import { Button, Container, Grid, Header, Icon, Menu, Search, Segment } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import HomePageHeading from './HomePageHeading'
import ProductComponent from './ProductComponent'
import Footer from './Footer'
import DealerComponent from './DealerComponent'
import AboutComponent from './AboutComponent'
import PopularComponent from './PopularComponent'

const DesktopContainer = () => {
    return(
        <div>
       <Segment 
          id="bgSegment"
          textAlign='center' 
          inverted  
          style={{minHeight: 400}}

        >
            <Menu
            secondary
            size='huge'
            fixed='top'
            style={{textAlign: 'center', backgroundColor: '#FFF'}}
            >
                <Container>
                    <Menu.Item>KEFENA.COM</Menu.Item>
                    <Menu.Item as="a" active>Products</Menu.Item>
                    <Menu.Item as="a">Our dealers</Menu.Item>
                    <Menu.Item as="a">Prescription</Menu.Item>
                    <Menu.Item as="a">Inspiration</Menu.Item>
                    <Menu.Item as="a">Current</Menu.Item>
                    <Menu.Item as="a">About us</Menu.Item>
                    <Menu.Item><Search placeholder='Search products' category /></Menu.Item>
                </Container>
                   
            </Menu>
        <HomePageHeading />
       </Segment>
       <Segment vertical style={{textAlign: 'center', padding: '4em 0em'}}>
         <Container>
         <Grid>
            <Grid.Row>
                <Grid.Column>
                    <Header
                      as="h1"
                      color='teal'
                      content="OUR POPULAR FOODS"
                    />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <PopularComponent />
                </Grid.Column>
            </Grid.Row>

         </Grid>
         </Container>
       </Segment>
       <Segment vertical textAlign='center' style={{padding: '4em 0em', backgroundColor: '#FFF'}}>
         <Container>
         <Grid>
            <Grid.Row>
                <Grid.Column>
                    <Header 
                        as="h1" 
                        size='huge'
                        color='teal'
                        content="OUR PRODUCTS" 
                    />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <ProductComponent />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <Button
                      basic
                      color='teal'
                      size='huge'
                    >
                        View All Products
                    </Button>
                </Grid.Column>
            </Grid.Row>
         </Grid>


         </Container>
       </Segment>
       <Segment vertical textAlign='center' style={{padding: '6em 0em', backgroundColor: '#F4F6F6'}}>
         <Container>
            <Grid>
                <Grid.Row>
                    <Grid.Column>
                        <DealerComponent />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
         </Container>
       </Segment>
       <Segment textAlign='center' vertical style={{padding: '4em 0em'}}>
        <Container>
        <Grid>
            <Grid.Row>
                <Grid.Column>
                    <Header
                      as="h1"
                      content="ABOUT KEFENA"
                      color='teal'

                    />

                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <AboutComponent />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <Button basic color='teal' size="huge">
                        Learn more about us
                    </Button>
                </Grid.Column>
            </Grid.Row>
        </Grid>
        </Container>
       </Segment>
       
       <Footer />
         </div>
        

    )
    
}
export default DesktopContainer