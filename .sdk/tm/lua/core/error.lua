-- WorldBankData SDK error

local WorldBankDataError = {}
WorldBankDataError.__index = WorldBankDataError


function WorldBankDataError.new(code, msg, ctx)
  local self = setmetatable({}, WorldBankDataError)
  self.is_sdk_error = true
  self.sdk = "WorldBankData"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function WorldBankDataError:error()
  return self.msg
end


function WorldBankDataError:__tostring()
  return self.msg
end


return WorldBankDataError
