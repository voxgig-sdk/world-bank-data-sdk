<?php
declare(strict_types=1);

// WorldBankData SDK utility: result_body

class WorldBankDataResultBody
{
    public static function call(WorldBankDataContext $ctx): ?WorldBankDataResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
