import React from 'react'
import Single from '@/components/Shop/SingleProduct';
import Bread from '@/components/Shop/Bread';
import Description from '@/components/Shop/Description';
import Project from '@/components/Shop/OurProduct';
import { data } from '@/data/data';


const page = ({ params: { details } }: { params: { details: string } }) => {
    const id = details
    const product = data.find((product) => product.id == id)

    return (
        <div>
            <Bread title={product?.title || 'Default Product Title'} />
            <Single single={product}></Single>
            <Description></Description>
            <Project></Project>
        </div>
    )
}

export default page