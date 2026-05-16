<?php
declare(strict_types=1);

// WorldBankData SDK utility: prepare_body

class WorldBankDataPrepareBody
{
    public static function call(WorldBankDataContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
