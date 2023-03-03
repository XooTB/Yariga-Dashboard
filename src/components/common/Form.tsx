import React from "react";
import { FormProps } from "interfaces/common";
import CustomButton from "./CustomButton";
import {
  Box,
  Typography,
  FormControl,
  FormHelperText,
  TextField,
  TextareaAutosize,
  Stack,
  Select,
  MenuItem,
  Button,
} from "@pankod/refine-mui";

const FormComponent = ({
  type,
  register,
  handleSubmit,
  handleImageChange,
  formLoading,
  onFinishHandler,
  propertyImage,
}: FormProps) => {
  return (
    <Box>
      <Typography className="text-2xl font-bold text-[#11142D]">
        {`${type} a Property`}
      </Typography>
      <Box className="mt-2 rounded-2xl p-5 bg-[#fcfcfc]">
        <form
          className="mt-5 w-full flex flex-col gap-5"
          onSubmit={handleSubmit(onFinishHandler)}
        >
          <FormControl>
            <FormHelperText className="font-semibold text-base m-2 text-[#11142d]">
              Enter property name
            </FormHelperText>
            <TextField
              fullWidth
              required
              id="outlined-basic"
              color="info"
              variant="outlined"
              {...register("title", { required: true })}
            />
          </FormControl>
          <FormControl>
            <FormHelperText className="font-semibold text-base m-2 text-[#11142d]">
              Enter property description
            </FormHelperText>
            <TextareaAutosize
              minRows={5}
              required
              placeholder="Write description"
              color="info"
              className="w-full bg-transparent text-base border-2 border-stone-400 rounded-md p-2"
              {...register("description", { required: true })}
            />
          </FormControl>
          <Stack className="flex-row gap-4">
            <FormControl className="flex-1">
              <FormHelperText className="font-medium m-2 text-base text-[#11142D]">
                Select property type
              </FormHelperText>
              <Select
                variant="outlined"
                color="info"
                displayEmpty
                required
                inputProps={{ "area-lable": "Without lable" }}
                defaultValue="apartment"
                {...register("propertyType", { required: true })}
              >
                <MenuItem value="apartment"> Apartment</MenuItem>
                <MenuItem value="villa">Villa</MenuItem>
                <MenuItem value="farmhouse">Farmhouse</MenuItem>
                <MenuItem value="condos">Condos</MenuItem>
                <MenuItem value="townhouse">Townhouse</MenuItem>
                <MenuItem value="duplex">Duplex</MenuItem>
                <MenuItem value="studio">Studio</MenuItem>
                <MenuItem value="chalet">Chalet</MenuItem>
              </Select>
            </FormControl>
            <FormControl>
              <FormHelperText className="font-semibold text-base m-2 text-[#11142d]">
                Enter property price
              </FormHelperText>
              <TextField
                fullWidth
                required
                id="outlined-basic"
                type="number"
                color="info"
                variant="outlined"
                {...register("price", { required: true })}
              />
            </FormControl>
          </Stack>
          <FormControl>
            <FormHelperText className="font-semibold text-base m-2 text-[#11142d]">
              Enter location
            </FormHelperText>
            <TextField
              fullWidth
              required
              id="outlined-basic"
              color="info"
              variant="outlined"
              {...register("location", { required: true })}
            />
          </FormControl>
          <Stack className="flex-col gap-1 justify-center mb-2">
            <Stack className="flex-row gap-0.5">
              <Typography className="text-[#11142D] text-base font-medium m-2">
                Property photo
              </Typography>
              <Button
                // @ts-ignore
                component="lable"
                className="w-fit text-[#2ed490] capitalize font-base"
              >
                Upload *
                <input
                  hidden
                  accept="image/*"
                  type="file"
                  onChange={(e) => {
                    // @ts-ignore
                    handleImageChange(e.target.files[0]);
                  }}
                />
              </Button>
            </Stack>
            <Typography className="text-sm text-[#808191] break-all">
              {propertyImage?.name}
            </Typography>
          </Stack>
          <CustomButton
            type="Submit"
            title={formLoading ? "Submitting..." : "Submit"}
            backgroundColor="#475Be8"
            color="#FCFCFC"
          />
        </form>
      </Box>
    </Box>
  );
};

export default FormComponent;
