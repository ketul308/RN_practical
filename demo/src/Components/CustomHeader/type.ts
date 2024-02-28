import React from "react"

export type Props = {
    leftIcon?: React.ReactNode
    rightIcon?: React.ReactNode

    onPressLeftIcon?: () => void
    onPressRightIcon?: () => void
}