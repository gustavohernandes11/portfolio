import * as Styled from './styles.js'
import { Typography } from '@mui/material'

export const Footer = ({children}: any) => {
    return (
        <Styled.Container>
            <Typography >Created with Next.js</Typography>
        </Styled.Container>
    )
}

