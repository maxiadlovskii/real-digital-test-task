import React from 'react'
import { Input as CustomInput } from 'react-input-validator'
import styles from './Input.module.scss'

export const Input = props => <CustomInput cssModule={styles} {...props}/>;