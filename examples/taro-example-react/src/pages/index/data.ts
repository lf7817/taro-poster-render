import { PosterItemConfig } from "@poster-render/taro";

export const data3: PosterItemConfig[] = [
  {
    type: "image",
    x: 0,
    y: 0,
    width: 644,
    height: 1104,
    mode: "cover",
    src: "wxfile://tmp_c123e16974a57e5206407124b53a4d77.png",
    radius: 16,
  },
];

export const data2: PosterItemConfig[] = [
  {
    type: "rect",
    x: 0,
    y: 0,
    width: 644,
    height: 1104,
    radius: 0,
    backgroundColor: "black",
  },
  {
    type: "image",
    x: 0,
    y: 0,
    width: 644,
    height: 1104,
    mode: "cover",
    src: "https://img.1000.com/shumou/interaction/bg3.png",
    radius: 16,
  },
  {
    type: "image",
    x: 294,
    y: 30,
    width: 96,
    height: 96,
    radius: 48,
    src: "https://img.1000.com/shumou/interaction/avatar.png",
  },
  {
    type: "text",
    x: (textWidth, measureText) =>
      (644 - textWidth - measureText("的助力邀请").width) / 2,
    y: 180,
    width: (textWidth) => textWidth,
    height: 30,
    text: "中二猪猪猪",
    color: "#fff",
    fontSize: 28,
    textAlign: "left",
    baseLine: "top",
    textDecoration: "line-through",
  },
  {
    type: "text",
    x: (textWidth, measureText) =>
      (644 - textWidth - measureText("中二猪猪猪").width) / 2 +
      measureText("中二猪猪猪").width +
      10,
    y: 180,
    width: 200,
    height: 30,
    text: "的助力邀请",
    color: "#FEEE93",
    fontSize: 28,
    baseLine: "top",
    textDecoration: "underline",
  },
  {
    type: "image",
    x: 70,
    y: 240,
    width: 508,
    height: 68,
    src: "https://img.1000.com/shumou/interaction/text.png",
  },
  {
    type: "rect",
    x: 22,
    y: 760,
    width: 600,
    height: 320,
    backgroundColor: "#fff",
    radius: 20,
    borderColor: "#000",
    borderWidth: 10,
  },
  {
    type: "rect",
    x: 100,
    y: 800,
    width: 100,
    height: 100,
    backgroundColor: "red",
    radius: 50,
    borderColor: "yellow",
    borderWidth: 10,
  },
  {
    type: "image",
    x: 60,
    y: 380,
    sx: 0,
    sy: 0,
    width: 400,
    height: 300,
    backgroundColor: "red",
    mode: "cover",
    src: "https://img.1000.com/shumou/interaction/img2.png",
  },
  {
    type: "line",
    x: 50,
    y: 50,
    destX: 200,
    destY: 50,
    color: "#fff",
    lineWidth: 4,
  },
];

export const data1: PosterItemConfig[] = [
  {
    type: "rect",
    x: 0,
    y: 0,
    width: 644,
    height: 1104,
    radius: 0,
    backgroundColor: "black",
  },
  {
    type: "image",
    x: 0,
    y: 0,
    width: 644,
    height: 1104,
    mode: "cover",
    src: "https://img.1000.com/shumou/interaction/bg3.png",
    radius: 16,
  },
  {
    type: "image",
    x: 294,
    y: 30,
    width: 96,
    height: 96,
    radius: 48,
    src: "https://img.1000.com/shumou/interaction/avatar.png",
  },
  {
    type: "text",
    x: (textWidth, instance) =>
      (644 - textWidth - instance.measureText("的助力邀请").width) / 2,
    y: 180,
    width: (textWidth) => textWidth,
    height: 30,
    text: "中二猪猪猪",
    color: "#fff",
    fontSize: 28,
    textAlign: "left",
    baseLine: "top",
    textDecoration: "line-through",
  },
  {
    type: "text",
    x: (textWidth, instance) =>
      (644 - textWidth - instance.measureText("中二猪猪猪").width) / 2 +
      instance.measureText("中二猪猪猪").width +
      10,
    y: 180,
    width: 200,
    height: 30,
    text: "的助力邀请",
    color: "#FEEE93",
    fontSize: 28,
    baseLine: "top",
    textDecoration: "underline",
  },
  {
    type: "image",
    x: 70,
    y: 240,
    width: 508,
    height: 68,
    src: "https://img.1000.com/shumou/interaction/text.png",
  },
  {
    type: "rect",
    x: 22,
    y: 760,
    width: 600,
    height: 320,
    backgroundColor: "#fff",
    radius: 20,
    borderColor: "#000",
    borderWidth: 10,
  },
  {
    type: "rect",
    x: 100,
    y: 800,
    width: 100,
    height: 100,
    backgroundColor: "red",
    radius: 50,
    borderColor: "yellow",
    borderWidth: 10,
  },
  {
    type: "line",
    x: 50,
    y: 50,
    destX: 200,
    destY: 50,
    color: "#fff",
    lineWidth: 4,
  },
];
