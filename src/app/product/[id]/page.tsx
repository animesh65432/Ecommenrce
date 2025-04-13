import { DetailsProduct } from '@/components';
import React from 'react';

export default async function ProductPage(props: any) {
    const productId = Number(props.params.id);

    if (isNaN(productId)) {
        return <div>Invalid product ID</div>;
    }

    return (
        <>
            <DetailsProduct id={productId} />
        </>
    );
}