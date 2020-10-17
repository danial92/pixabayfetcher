import React from 'react';
import './ImageResults.css';
import { GridList, GridTile } from 'material-ui/GridList';

const imageResults = props => {
    return (
        <div>
            <GridList cellHeight={180} cols={4}>
            {props.images.map(image => {
                return (
                    <GridTile key={image.id}>
                       <img src={image.previewURL} alt={image.tags} />
                    </GridTile>
                )
            })}
            </GridList>
        </div>
    )
}

export default imageResults;