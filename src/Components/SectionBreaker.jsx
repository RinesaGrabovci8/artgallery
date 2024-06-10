import styled from 'styled-components'

const Wrapper = styled.div`
    padding-top: 150px;
    
    @media (max-width: 1535.98px) { 
        padding-top: 130px;
    }


    @media (max-width: 1199.98px) { 
        padding-top: 130px;
    }

    @media (max-width: 899.98px) {
        padding-top: 100px;

    }

    @media (max-width: 599.98px) { 
        padding-top: 90px;
    }
`
function SectionBreaker({children, style}) {
    return (
        <Wrapper style={{...style}}>
            {children}
        </Wrapper>
    )
}

export default SectionBreaker