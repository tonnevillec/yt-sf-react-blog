import React from 'react';

const Tags = (props) => {
    return <p className="post-tags">
        {props.list.map(tag =>
            <a href="#"
               className="label label-default"
               key={tag.id}
            >
                <i className="fa fa-tag"></i> {tag.name}
            </a>
        )}
    </p>;
};

export default Tags;