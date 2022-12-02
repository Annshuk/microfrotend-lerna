import styled from "styled-components"

import clsx from 'clsx'

const SectionTitle = styled.div`
 font-weight: 600;
 line-height:1.5;
 margin-bottom:10px;
 
 &.h1{
    font-size: 18px;
 }

 &.h2 {
    font-size: 16px;
 }

 &.h3 {
    font-size: 14px;
 }

 &.h4 {
    font-size: 12px;
 } 
 
 &.h5 {
   font-size: 10px;
}

&.h6 {
   font-size: 8px;
}
 `

/**
 * 
 * Heading
 * @returns h1,h2,h3,h4,h5,h6
 */

export const Heading = ({ title, variant = "h1", ...rest }) => <SectionTitle
   as="h1"
   className={ clsx({ [variant]: variant }) }
   { ...rest }
>
   { title }
</SectionTitle>
