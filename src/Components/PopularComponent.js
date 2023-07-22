import { Button, Grid } from "semantic-ui-react"

const PopularComponent = () => {

    return(
       <Grid>
        <Grid.Row>
            <Grid.Column width={4}>
                <Button 
                   fluid 
                   size="large" 
                   basic 
                   color="teal" 
                   circular
                >
                    Beans & Lentils
                </Button>
            </Grid.Column>
            <Grid.Column width={4}>
            <Button 
                   fluid 
                   size="large" 
                   basic 
                   color="teal" 
                   circular
                >
                    Vegetables
                </Button>
                
            </Grid.Column>
            <Grid.Column width={4}>
            <Button 
                   fluid 
                   size="large" 
                   basic 
                   color="teal" 
                   circular
                >
                    Dough
                </Button>
                
            </Grid.Column>
            <Grid.Column width={4}>
            <Button 
                   fluid 
                   size="large" 
                   basic 
                   color="teal" 
                   circular
                >
                    Seasoning
                </Button>
                
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column width={4}>
                <Button 
                   fluid 
                   size="large" 
                   basic 
                   color="teal" 
                   circular
                >
                    Cheese & Dairy
                </Button>
            </Grid.Column>
            <Grid.Column width={4}>
            <Button 
                   fluid 
                   size="large" 
                   basic 
                   color="teal" 
                   circular
                >
                    Falafel & Burgers
                </Button>
                
            </Grid.Column>
            <Grid.Column width={4}>
            <Button 
                   fluid 
                   size="large" 
                   basic 
                   color="teal" 
                   circular
                >
                    Hummus
                </Button>
                
            </Grid.Column>
            <Grid.Column width={4}>
            <Button 
                   fluid 
                   size="large" 
                   basic 
                   color="teal" 
                   circular
                >
                    Tubes
                </Button>
                
            </Grid.Column>
        </Grid.Row>
       </Grid>
    )
}
export default PopularComponent