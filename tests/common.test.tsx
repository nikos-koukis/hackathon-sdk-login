import * as React from 'react'
import { render } from '@testing-library/react'
import 'jest-canvas-mock'
import { GoogleLoginApp } from '../src'

describe('Common render', () => {
  it('renders without crashing', () => {
    const mockOnDecodedData = jest.fn() // Create a mock function
    render(<GoogleLoginApp onDecodedData={mockOnDecodedData} />)
  })
})
