import axios from "axios";
import { recipes } from "./recipes";
axios.defaults.baseURL = "https://t2d-soyammy-backend.onrender.com/api/";

export const getRecipesByIngredient = async (
  query: string,
  page: number,
  limit: number
) => {
  try {
    const response = await axios(
      `ingredients?query=${query}&page=${page}&limit=${limit}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
export const getAllRecipes = () => {
  return recipes;
};
export const getMyRecipes = async (page: number, limit: number) => {
  try {
    const res = await axios.get(`/ownrecipes/?page=${page}&limit=${limit}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export const addMyRecipes = async (data: any) => {
  try {
    const response = await axios.post("ownrecipes", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const daleteMyRecipes = async (recipeId: number) => {
  try {
    const res = await axios.delete(`/ownrecipes/${recipeId}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
