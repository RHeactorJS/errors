/* global describe it expect */

import {AccessDeniedError, ApplicationError, ConflictError, EntryAlreadyExistsError, EntryDeletedError, EntryNotFoundError, PaymentRequiredError, TokenExpiredError, UnhandledDomainEventError, ValidationFailedError, ReanimationFailedError} from '../src'

describe('Errors', () => {
  describe('AccessDeniedError', () => {
    it('should have the correct name', () => {
      expect((new AccessDeniedError()).name).toEqual('AccessDeniedError')
    })
  })
  describe('ApplicationError', () => {
    it('should have the correct name', () => {
      expect((new ApplicationError()).name).toEqual('ApplicationError')
    })
  })
  describe('ConflictError', () => {
    it('should have the correct name', () => {
      expect((new ConflictError()).name).toEqual('ConflictError')
    })
  })
  describe('EntryAlreadyExistsError', () => {
    it('should have the correct name', () => {
      expect((new EntryAlreadyExistsError()).name).toEqual('EntryAlreadyExistsError')
    })
  })
  describe('EntryDeletedError', () => {
    it('should have the correct name', () => {
      expect((new EntryDeletedError()).name).toEqual('EntryDeletedError')
    })
  })
  describe('EntryNotFoundError', () => {
    it('should have the correct name', () => {
      expect((new EntryNotFoundError()).name).toEqual('EntryNotFoundError')
    })
  })
  describe('PaymentRequiredError', () => {
    it('should have the correct name', () => {
      expect((new PaymentRequiredError()).name).toEqual('PaymentRequiredError')
    })
  })
  describe('TokenExpiredError', () => {
    it('should have the correct name', () => {
      expect((new TokenExpiredError()).name).toEqual('TokenExpiredError')
    })
  })
  describe('UnhandledDomainEventError', () => {
    it('should have the correct name', () => {
      expect((new UnhandledDomainEventError()).name).toEqual('UnhandledDomainEventError')
    })
    it('should have the event name in the message', () => {
      expect((new UnhandledDomainEventError('SomeEvent')).toString()).toEqual('UnhandledDomainEventError: Unhandled domain event "SomeEvent"')
    })
  })
  describe('ValidationFailedError', () => {
    it('should have the correct name', () => {
      expect((new ValidationFailedError()).name).toEqual('ValidationFailedError')
    })
  })
  describe('ReanimationFailedError', () => {
    it('should have the correct name', () => {
      expect((new ReanimationFailedError()).name).toEqual('ReanimationFailedError')
    })
    it('should accept a message', () => {
      expect((new ReanimationFailedError('some message')).message).toEqual('some message')
    })
    it('should accept data', () => {
      expect((new ReanimationFailedError('some message', {foo: 'bar'})).data).toEqual({foo: 'bar'})
    })
  })
})
