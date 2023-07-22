import { Container, Grid, Header, Message } from "semantic-ui-react"

const HomePageHeading = () => {
    return(
        <Container>
            <Grid textAlign="center">
                <Grid.Row>
                    <Grid.Column>
                    <Header 
                        as="h1" 
                        inverted
                        content="Packaged Food For Your Daily Needs"
                        style={{fontSize: '4em', fontWeight: 'normal', marginTop: '1.5em'}}
                    />

                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column id="bgColumn" width={8}>                 
                        <Header
                          as="h1"
                          content="PLEASE HAVE A SEAT AT THE TABLE"
                          style={{paddingTop: '1em', color: '#48C9B0 '}}
                        />
                        <Header
                          as="h4"
                          content="Our food unites and we want to 
                          contribute to a society where everyone 
                          feels welcome at the table."
                          style={{color: '#48C9B0 ', paddingBottom: '1em'}}
                        />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            
          
             

        </Container>

    )
}
export default HomePageHeading