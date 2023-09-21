import { render, screen } from '@testing-library/react';
import App from '../App';

describe('Testes Aplicação', () => {
  test('Se o botão Mais Notícias está na tela', () => {
    render(<App />);
    const btnMore = screen.getByRole('button', { name: /mais noticías/i });
    
    expect(btnMore).toBeInTheDocument();
  });
  test('Se o botão Imagem da notícia mas recente está na tela', () => {
    render(<App />);
    const btnSearch = screen.getByRole('button', {name: /mais recentes/i});
    
    expect(btnSearch).toBeInTheDocument();
  });
});