import React from 'react';
import Icons from "./icons.svg";


export enum EIcon {
    menu = 'menu',
    block = 'block',
    warning = 'warning',
    comments = 'comments',
    shared = 'shared',
    save = 'save',
    avatarNone = 'avatar-anon',
}

interface IIcons {
    name: EIcon
    size: [width:number, height:number]
}

export function Icon(props: IIcons) {
    const {
        name,
        size,
    } = props

    let [width, height] = size

    return (
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
            <use xlinkHref={`${Icons}#icon-${name}`} />
        </svg>
    );
}
