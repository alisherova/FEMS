import {FC} from "react";
import {Controller} from "react-hook-form";
import {
    FileLabel,
    Label,
    Wrapper,
    AsInput,
    AsTextarea,
    AsPassword,
} from "./style";
import ErrorLabel from "./errorLabel";
import {Type} from "./type";
import {ConfigProvider, InputProps} from "antd";
import {bgColors} from "styles/theme";

const Input: FC<Type & InputProps> = ({
                                          placeholder = "",
                                          name,
                                          type = "input",
                                          htmlType = "text",
                                          error = "",
                                          control,
                                          required = false,
                                          label = "",
                                          disabled = false,
                                          style,
                                          defaultValue,
                                          rows,
                                          isEmptySpace = false,
                                          isBoxShadow = true,
                                          suffix,
                                          isFormatted,
                                          prefix,
                                          ...args
                                      }) => {
    return (
        <Wrapper required={label ? false : required} error={!!error}>
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: bgColors.primary,
                    },
                    components: {
                        Input: {
                            colorBgContainer: bgColors.slate50,
                        },
                    },
                }}
            >
                {label &&
                    (!(htmlType === "file") ? (
                        <Label required={required} htmlFor={name}>
                            {label}
                        </Label>
                    ) : (
                        <FileLabel required={required} htmlFor={name}>
                            Upload file
                        </FileLabel>
                    ))}
                <Controller
                    name={name}
                    control={control}
                    defaultValue={defaultValue}
                    render={({field}) => {
                        return type === "input" ? (
                            <AsInput
                                prefix={prefix}
                                isBoxShadow={isBoxShadow}
                                disabled={disabled}
                                id={name}
                                onChange={field.onChange}
                                defaultValue={defaultValue}
                                value={field.value}
                                suffix={suffix}
                                type={htmlType}
                                placeholder={placeholder}
                                style={{...style, minHeight: "36px"}}
                                {...args}
                                hidden={htmlType === "file"}
                            />
                        ) : type === "textarea" ? (
                            <AsTextarea
                                disabled={disabled}
                                id={name}
                                onChange={field.onChange}
                                value={field.value}
                                defaultValue={defaultValue}
                                placeholder={placeholder}
                                style={style}
                                {...args}
                                hidden={htmlType === "file"}
                                rows={rows}
                            />
                        ) : (
                            <AsPassword
                                value={field.value}
                                disabled={disabled}
                                style={style}
                                onChange={field.onChange}
                                placeholder={placeholder}
                                {...args}
                            />
                        );
                    }}
                />
                <ErrorLabel error={error}/>
            </ConfigProvider>
        </Wrapper>
    );
};

export default Input;
