import styled from 'styled-components'
import * as vars from './style/variables'


interface IProps {
    color?: string
}

const Wrapper = styled.div.attrs({
    tColor: (props: IProps) => props.color || 'blue',
    fSize: '32px'
})`
	header {
		color: red;

		&:hover {
			background-color: ${vars.secondaryColor};
            cursor: pointer;
		}
	}

    p {
        color: ${(props) => props.tColor};
        font-size: ${(props) => props.fSize};
    }

	.container {
		background-color: aqua;

		.head {
			color: beige;
		}
	}

	footer {
		color: ${vars.primaryColor};
	}
`

export default Wrapper
