// React Children
import { Children } from 'react'

const findChild = (children, child) =>
    Children.toArray(children)
    .filter(c => c.type === child)[0]

export const WhenTruthy = ({children}) =>
    Children.only(children)

export const WhenFalsy = ({children}) =>
    Children.only(children)

export const Display = ({ ifTruthy=true, children }) =>
    (ifTruthy) ?
        findChild(children, WhenTruthy) :
        findChild(children, WhenFalsy)

export const age = 19


