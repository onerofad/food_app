import { Button, Grid, Header, Image, Segment } from "semantic-ui-react"

const AboutComponent = () => {

    return(
        <Grid>
            <Grid.Row>
                <Grid.Column width={16}>
                    <Segment raised style={{padding: '0em 0em'}}>
                        <Grid>
                            <Grid.Row>
                                <Grid.Column width={8}>
                                    <Image fluid src="/images/about/aboutus.webp" />
                                </Grid.Column>
                                <Grid.Column width={8} textAlign="left">
                                     <Header 
                                        as="h1" 
                                        content="Our History" 
                                        style={{paddingTop: '4em'}}
                                        color="teal"
                                    />
                                    <p style={{FontSize: '2em'}}>
                                       When father Hratch came to Sweden from 
                                       Beirut in the 60s, the bag was full of 
                                       spices, bulgur and tahina.
                                    </p>
                                    <Button color="teal" size="large"  >
                                    Read More
                                    </Button>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>

                    </Segment>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}
export default AboutComponent