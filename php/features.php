<?php
declare(strict_types=1);

// WorldBankData SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class WorldBankDataFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new WorldBankDataBaseFeature();
            case "test":
                return new WorldBankDataTestFeature();
            default:
                return new WorldBankDataBaseFeature();
        }
    }
}
