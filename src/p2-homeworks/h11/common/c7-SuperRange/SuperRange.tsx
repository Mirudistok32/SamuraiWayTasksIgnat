import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";
import { makeStyles, Slider, Tooltip, withStyles } from "@material-ui/core";
// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperRangePropsType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
    onChangeRange?: (value: number) => void
    value: number
};
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
// Стили для инпута
const MySlider = withStyles({
    root: {
        color: "forestgreen",
        height: 8,
        margin: "0 auto",
        marginTop: 10,
        width: 400,
    },
    thumb: {
        height: 40,
        width: 40,
        backgroundColor: "forestgreen",
        border: "2px solid #000",
        // marginTop: -8,
        // marginLeft: -12,
        transform: " translateY(-35%)",
        "&:focus, &:hover, &$active": {
            boxShadow: "inherit"
        },
        "&:active": {
            boxShadow: "0 0 20px 5px #20c988"
        }
    },
    valueLabel: {
        left: "calc(-50% + 4px)",
    },
    active: {},
    track: {
        height: 11,
        borderRadius: 4,
        transform: " translateY(-25%)",
        backgroundColor: "#20c988",
        border: "1px solid #2d2d2d"
    },
    rail: {
        height: 8,
        borderRadius: 4
    }
})(Slider)

const SuperRange: React.FC<SuperRangePropsType> = (
    {
        type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
        onChange, onChangeRange,
        className,
        value,
        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {
    const onChangeHandler = (event: React.ChangeEvent<{}>, value: number | number[]) => {
        onChangeRange && onChangeRange(value as number)
    }
    return (
        <>
            <MySlider
                className={className}
                value={value}
                defaultValue={value}
                onChange={onChangeHandler}
                valueLabelDisplay="auto"
                // @ts-ignore
                ValueLabelComponent={ValueLabelComponent}
            />
        </>
    );
}

export default SuperRange;
