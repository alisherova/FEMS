import Select from "react-select";
import {
  StyledHelperText,
  StyledSelectContainer,
  StyledSelectInputContainer,
  Wrapper,
} from "./style";
import { Box } from "@mui/system";
import React, { FC, useState } from "react";
// import { THandleClickItem } from "../../mySelect/type";
// import { ArrowSelectSvg } from "components";

interface ISelectCustomProps {
  options: Array<{ label: string; value: string }>;
  label: string;
  name: string;
  disabled?: boolean;
  value?: string | string[] | null;
  defaultValue?: string | string[] | null;
  onChange: any;
}

const select: FC<ISelectCustomProps> = ({
  label,
  options,
  disabled,
  name,
  defaultValue,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState<string | string[] | null>(
    defaultValue ?? ""
  );

  const handleClickItem = (item: any, bool = false) => {
    setValue(item);
    setIsOpen(false);
    onChange(item);
  };
  return (
    <Wrapper>
      {label && <StyledHelperText>{label}</StyledHelperText>}
      <Select
        id={name}
        options={options as any}
        menuIsOpen={isOpen}
        unstyled
        closeMenuOnSelect
        closeMenuOnScroll
        isDisabled={disabled}
        isMulti={false}
        value={value}
        defaultValue={defaultValue}
        components={{
          DropdownIndicator: () => null,
          IndicatorsContainer: () => null,
          DownChevron: () => null,
          ValueContainer: (props, context) => (
            <StyledSelectInputContainer
              onClick={() => setIsOpen(!isOpen)}
              isOpen={isOpen}
              value={value}
            >
              <Box display="flex" flexWrap="wrap" gap="4px">
                {value ?? "-"}
              </Box>
              <Box
                ml="auto"
                display="flex"
                alignItems="center"
                justifyContent="center"
                className={isOpen ? "dropdown__open" : "dropdown__close"}
              >
                {/*<ArrowSelectSvg />*/}
              </Box>
            </StyledSelectInputContainer>
          ),
          Menu: (props, context) => (
            <StyledSelectContainer>
              {options.map((option) => {
                const bool = value === option.value;
                return (
                  <div
                    key={`${option.value}_key`}
                    className={`item ${bool ? "item__active" : ""}`}
                    onClick={() => {
                      handleClickItem(option.value);
                    }}
                  >
                    <Box mx="6px">{option.label}</Box>
                  </div>
                );
              })}
            </StyledSelectContainer>
          ),
        }}
      />
    </Wrapper>
  );
};

export default select;
