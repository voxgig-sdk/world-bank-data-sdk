<?php
declare(strict_types=1);

// WorldBankData SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class WorldBankDataMakeContext
{
    public static function call(array $ctxmap, ?WorldBankDataContext $basectx): WorldBankDataContext
    {
        return new WorldBankDataContext($ctxmap, $basectx);
    }
}
