import { Box, Icon, Typography } from "@mui/material";
import React, { useMemo, useCallback, useState } from "react";
import { FileRejection, useDropzone } from "react-dropzone";
import TenFileUploadProgressBar from "./TenFileUploadProgressBar";

const TenDropzone = () => {
  const baseStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: 100,
    marginTop: 20,
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: "center",
    borderColor: "#3E4756",
    borderStyle: "dashed",
    backgroundColor: "#FFFFFF",
    paddingLeft: 10,
    paddingRight: 10,
    color: "#bdbdbd",
    outline: "none",
    transition: "border .24s ease-in-out",
    marginBottom: 20,
    cursor: "pointer",
  };

  const focusedStyle = {
    borderColor: "#2196f3",
  };

  const acceptStyle = {
    borderColor: "#00e676",
  };

  const rejectStyle = {
    borderColor: "#ff1744",
  };

  const [files, setFiles] = useState([]);
  const onDrop = useCallback((accFiles, rejFiles) => {
    const mappedAcc = accFiles.map((file) => ({ file, errors: [] }));
    setFiles((curr) => [...curr, ...mappedAcc, ...rejFiles]);
  }, []);

  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject,
  } = useDropzone({ onDrop });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  );

  //   const acceptedFilesItem

  return (
    <Box>
      <Box {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <Icon sx={{ color: "third-01.main" }}>file_upload</Icon>
        <Typography color="third-01.main">Upload Company Logo</Typography>
      </Box>
      {files.map((fileWrapper) => (
        <TenFileUploadProgressBar file={fileWrapper.file} />
      ))}
    </Box>
  );
};

export default TenDropzone;
