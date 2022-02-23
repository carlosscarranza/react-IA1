import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

export default function RecipeReviewCard({garbage, cleanerHere}) {

    return (

        <Card sx={{ width: 345, backgroundColor: 'white', margin: '10px' }} >
            {cleanerHere &&
                <CardMedia
                    component="img"
                    height="194"
                    image="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                    alt=""
                />
            }

            {garbage &&
                <CardMedia
                    component="img"
                    height="194"
                    image="https://images.unsplash.com/photo-1517664946321-87d2e16ebaa6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                    alt=""
                />
            }

        </Card>

    );
}
