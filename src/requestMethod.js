import axios from "axios";

const BASE_URL = "https://hueen-shop-api.vercel.app/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOTE5NTE3ZGFjNjdiZWRjMWY3OTU4ZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MDU3MzcwOCwiZXhwIjoxNjcwODMyOTA4fQ.anuwfZtVwoF9xjLheUNBFsXv42O1QUZ1qHcoD1FLjjw";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
