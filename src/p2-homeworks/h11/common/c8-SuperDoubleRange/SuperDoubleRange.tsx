import { makeStyles, Slider, Tooltip, withStyles } from "@material-ui/core";
import React from "react";

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    // min, max, step, disable, ...
}

// Стили для подсказки
const useStylesTooltip = makeStyles((theme) => ({
    arrow: {
        color: theme.palette.common.black,
    },
    tooltip: {
        backgroundColor: theme.palette.common.black,
        top: 5,
        border: "1px solid snow",
        boxShadow: "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)"
    },
}));

// Стили для инпута
const MySlider = withStyles({
    root: {
        color: "firebrick",
        height: 8,
    },
    thumb: {
        height: 24,
        width: 24,
        backgroundColor: "dodgerblue",
        border: "2px solid #2d2d2d",
        marginTop: -8,
        marginLeft: -12,
        "&:focus, &:hover, &$active": {
            boxShadow: "inherit"
        }
    },
    valueLabel: {
        left: "calc(-50% + 4px)",
    },
    active: {},
    track: {
        height: 8,
        borderRadius: 4
    },
    rail: {
        height: 8,
        borderRadius: 4
    }
})(Slider)

// Компонента, которая отрисовывает внешний вид подсказки
// Не придумал как типизировать
function ValueLabelComponent(props: any): any {
    const { children, open, value } = props;
    const classes = useStylesTooltip();
    return (
        <Tooltip
            arrow
            classes={classes}
            open={open}
            enterTouchDelay={0}
            placement="top"
            title={value}>
            {children}
        </Tooltip>
    );
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {
    const onChangeHandler = (event: React.ChangeEvent<{}>, value: number | number[]) => {
        const [v1, v2] = value as Array<number>
        onChangeRange && onChangeRange([v1, v2])
    }
    return (
        <>
            <MySlider
                value={value}
                defaultValue={value}
                onChange={onChangeHandler}
                valueLabelDisplay="auto"
                // @ts-ignore
                ValueLabelComponent={ValueLabelComponent}
                aria-labelledby="range-slider"
            />
        </>
    );
}

export default SuperDoubleRange;
