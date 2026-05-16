<?php
declare(strict_types=1);

// WorldBankData SDK utility: feature_add

class WorldBankDataFeatureAdd
{
    public static function call(WorldBankDataContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
