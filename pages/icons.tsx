import * as icons from "components/elements/icons";
import React, { useEffect, useMemo, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { Input } from "../components";

function Icons() {
  const arrayFromIconsObj = useMemo(() => {
    const newItem = [];
    for (let key in icons) {
      newItem.push(key);
    }
    return newItem;
  }, []);
  const [filteredIcons, setFilteredIcons] = useState(arrayFromIconsObj);
  const {
    control,
    formState: { errors },
    watch,
  } = useForm();

  useEffect(() => {
    const subscription = watch((value) => {
      setFilteredIcons(
        arrayFromIconsObj.filter((i) =>
          i.toLowerCase().includes(value?.icon.toLowerCase())
        )
      );
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <div>
      <form>
        <Box px="40px" py="20px">
          <Input
            label="Search icons"
            name="icon"
            control={control}
            placeholder="Type here ..."
            error={errors?.name?.message}
          />
        </Box>
      </form>
      <Grid container px="40px">
        {filteredIcons.map((item) => {
          // @ts-ignore
          const ItemComponent = icons[item as string];
          return (
            <Grid
              item
              key={JSON.stringify(item)}
              width="200px"
              height="200px"
              style={{
                display: "grid",
                alignItems: "center",
                justifyContent: "center",
                border: "0.5px solid black",
              }}
            >
              <Box display="flex" flex={1} justifyContent="center">
                <ItemComponent width={40} height={40} />
              </Box>
              <Typography
                onClick={() => {
                  navigator.clipboard.writeText(item);
                  toast("text copied");
                }}
              >
                {item}
              </Typography>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default Icons;
