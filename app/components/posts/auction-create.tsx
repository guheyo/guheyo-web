import React, { useState, useRef } from 'react';
import { TextField, IconButton, Grid, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import Image from 'next/image';
import Router from 'next/router';

export default function AuctionCreate() {
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);

  const [title, setTitle] = useState<string>('');
  const [startBidAmount, setStartBidAmount] = useState<number>(0);
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const handleFilesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const fileArray = Array.from(event.target.files);
      setFiles([...files, ...fileArray]);
      const newPreviewUrls = fileArray.map((file) => URL.createObjectURL(file));
      setPreviewUrls([...previewUrls, ...newPreviewUrls]);
    }
  };

  const handleDeleteFile = (index: number) => {
    setFiles(files.filter((v, i) => i !== index));
    setPreviewUrls(previewUrls.filter((v, i) => i !== index));
    URL.revokeObjectURL(previewUrls[index]);
  };

  const handleFileInputClick = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ files, title, startDate, endDate, description });
  };

  return (
    <div className="w-[90%] h-full">
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} className="flex items-center gap-4 w-full">
            <div className="relative w-24 h-24 flex-shrink-0">
              <span className="absolute top-2 left-3 transform -translate-y-full text-xs text-[#737373] bg-white px-1">
                상품 사진
              </span>
              <button
                type="button"
                className="border-gray-300 w-full h-full flex justify-center items-center cursor-pointer rounded-md  hover:border-black transition duration-300 ease-in-out border
      text-gray-300 hover:text-black
      "
                onClick={handleFileInputClick}
              >
                <CameraAltIcon fontSize="large" />
              </button>
            </div>
            <input
              accept="image/*"
              multiple
              type="file"
              onChange={handleFilesChange}
              className="hidden"
              ref={fileInputRef}
            />
            <div className="flex flex-row gap-2 overflow-x-auto">
              {previewUrls.map((url, index) => (
                <div key={url} className="relative w-24 h-24 shrink-0">
                  <Image
                    src={url}
                    alt={`preview-${index}`}
                    width={96}
                    height={96}
                  />
                  <IconButton
                    className="absolute top-1 right-1 bg-opacity-70 rounded-full bg-red-500 w-5 h-5"
                    onClick={() => handleDeleteFile(index)}
                  >
                    <CloseIcon className="text-white w-3 h-3" />
                  </IconButton>
                </div>
              ))}
            </div>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="제목"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              margin="normal"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="경매 시작가"
              value={startBidAmount}
              onChange={(e) => setStartBidAmount(Number(e.target.value))}
              margin="normal"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              type="number"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="경매 시작일"
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="경매 종료일"
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="상품 설명"
              multiline
              minRows={4}
              placeholder="상품 설명"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              margin="normal"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              variant="outlined"
              className="rounded bg-black text-white transition ease-in-out duration-300 w-full
              hover:text-black hover:border hover:border-black 
              border h-12
              "
              type="submit"
            >
              등록하기
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              variant="outlined"
              className="rounded border-black text-black hover:bg-black hover:text-white transition ease-in-out duration-300 w-full
              h-12
              "
              type="button"
              onClick={() => Router.back()}
            >
              취소하기
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
