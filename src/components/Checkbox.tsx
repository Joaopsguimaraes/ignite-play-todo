import { styled, theme } from "../styles";
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { FiCheck } from 'react-icons/fi'

const StyledCheckbox = styled(CheckboxPrimitive.Root,{
    cursor: 'pointer',
    width: 23,
    height: 23,
    borderRadius: 9999,
    border: `2px solid ${theme.colors.blue}`,
    background: 'none',
    color: theme.colors.gray100,
    '&[data-state="checked"]':{
        backgroundColor: theme.colors.purpleDark,
    }
});

const StyledIndicator = styled(CheckboxPrimitive.Indicator,{
    display: 'flex',
    alignItems:'center',
    justifyContent:'center',
    color: theme.colors.blue
});

type CheckboxProps = CheckboxPrimitive.CheckboxProps & React.ComponentProps<typeof StyledCheckbox>;


export function Checkbox({...props}: CheckboxProps): JSX.Element{
    return(
        <StyledCheckbox {...props}>
            <StyledIndicator>
                <FiCheck size={12} color="#f2f2f2" />
            </StyledIndicator>
        </StyledCheckbox>
    )
}