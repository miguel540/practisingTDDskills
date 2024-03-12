import axios from 'axios';
import { Request, Response } from 'express';
import { IPais } from '../interfaces/paises.interface';

// Urls para obtener datos
// https://restcountries.com/v3.1/all
// https://restcountries.com/v3.1/region/:europe
// https://restcountries.com/v3.1/name/:spain
//https://restcountries.com/v3.1/independent?status=true

export const getTodosLosPaises = async (req: Request, res: Response) => {
  try {
    const todosLosPaises = await axios.get<IPais[]>('https://restcountries.com/v3.1/all');
    res.status(200).json(todosLosPaises.data);
   
  } catch (error: unknown) {
    return error;
  }
};

export const getRegion = async (req: Request, res: Response) => {
  const { regionSolicitada } = req.params;
  
  try {
    const region = await axios.get<IPais[]>
                                (`https://restcountries.com/v3.1/region/${regionSolicitada}`);
    res.status(200).json(region.data);
  } catch (error) {
    return error;
  }
};

export const getPais = async (req: Request, res: Response) => {
  const { paisSolicitado } = req.params;
  try {
    const pais = await axios.get<IPais[]>
                        (` https://restcountries.com/v3.1/name/${paisSolicitado}`);
                        
    res.status(200).json(pais.data);
  } catch (error) {
    return error;
  }
};

export const getPaisesIndependientes = async (req: Request, res: Response) => {
    const { esIndependiente} = req.params;
  
    try {
      const pais = await axios.get<IPais[]>
                          (`https://restcountries.com/v3.1/independent?status=${esIndependiente}`);
      res.status(200).json(pais.data);
    } catch (error) {
      return error;
    }
  };
  

