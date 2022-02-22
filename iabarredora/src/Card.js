import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';

export default function RecipeReviewCard(props) {
    const hasGarbage = props.garbage;

    return (

        <>
            {
                <Card sx={{ width: 345, backgroundColor: 'white', margin: '10px' }} >
                    {hasGarbage ?
                        <CardMedia
                            component="img"
                            height="194"
                            image="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                            alt=""
                        />
                        :
                        <CardMedia
                            component="img"
                            height="194"
                            image="https://images.unsplash.com/photo-1517664946321-87d2e16ebaa6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
                            alt=""
                        />
                    }

                </Card>
            }

        </>


    );
}
