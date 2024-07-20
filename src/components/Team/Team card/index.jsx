import React from "react";
import { Person, Image, Title, Role, Description } from "./styles";

function PersonCard({imageUrl, name, role, description }) {
    return <Person>
        <Image src={imageUrl}></Image>
        <Title>{name}</Title>
        <Role>{role}</Role>
        <Description dangerouslySetInnerHTML={{ __html: description }}></Description>
    </Person>
}
export default PersonCard;