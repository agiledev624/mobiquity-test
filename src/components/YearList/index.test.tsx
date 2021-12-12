import React from 'react'
import { render, screen } from '@testing-library/react'
import { YearList } from '.'

// const sendComment = jest.fn()

test('renders YearList Component', () => {
  render(<YearList />)
  expect(screen.getAllByRole('span')[0]).toHaveTextContent('2015')
})

test('Only available years are rendered', () => {
  render(<YearList />)
  const submitButton = screen.queryByText('2022')
  expect(submitButton).toBeNull() // it doesn't exist
})
