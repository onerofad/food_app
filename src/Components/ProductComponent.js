import { Grid, Segment, Image, Message } from "semantic-ui-react"

const ProductComponent = () => {
    return(
       <Grid>
        <Grid.Row>
            <Grid.Column width={4}>
                <Segment raised style={{minHeight: 350}}>
                    <Image fluid src="/images/products/product1.jpeg" />
                    <Message color="teal">
                        <Message.Header>Hummus Original 275g</Message.Header>
                    </Message>
                </Segment>
            </Grid.Column>
            <Grid.Column width={4}>
                <Segment raised style={{minHeight: 350}}>
                    <Image fluid src="/images/products/product2.jpeg" />
                    <Message color="teal">
                        <Message.Header> Bulgur Coarse Pivlalik Roasted Noodles 1kg</Message.Header>
                    </Message>
                </Segment>
            </Grid.Column>
            <Grid.Column width={4}>
                <Segment raised style={{minHeight: 350}}>
                    <Image fluid src="/images/products/product3.jpeg" />
                    <Message color="teal">
                        <Message.Header>Corned Beef 340g</Message.Header>
                    </Message>
                </Segment>
            </Grid.Column>
            <Grid.Column width={4}>
                <Segment raised style={{minHeight: 350}}>
                    <Image size="huge" fluid src="/images/products/product4.jpeg" />
                    <Message color="teal">
                        <Message.Header>Vine leaves in layer 620g</Message.Header>
                    </Message>
                </Segment>
            </Grid.Column>
        </Grid.Row>
       </Grid>
       
    )
}
export default ProductComponent