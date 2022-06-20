import React from 'react';
import { styled, theme } from '../styles';
import { Button } from './Button';
import { Input } from './Input';
import { FiPlusCircle } from 'react-icons/fi'


const Box = styled('div', {
    position: 'absolute',
    top: 173,
    width: '100vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
})

export function CreateTodo(){
    return(
        <Box>
            <Input placeholder='Adicione uma nova tarefa' />
            <Button>
                Criar
                <FiPlusCircle />
            </Button>

        </Box>
    )
}