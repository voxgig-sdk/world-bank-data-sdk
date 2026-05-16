<?php
declare(strict_types=1);

// WorldBankData SDK utility: result_headers

class WorldBankDataResultHeaders
{
    public static function call(WorldBankDataContext $ctx): ?WorldBankDataResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
