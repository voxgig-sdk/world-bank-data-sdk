<?php
declare(strict_types=1);

// WorldBankData SDK exists test

require_once __DIR__ . '/../worldbankdata_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = WorldBankDataSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
