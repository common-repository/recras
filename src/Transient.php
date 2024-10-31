<?php
namespace Recras;

class Transient
{
    private const BASE = 'recras_';

    /**
     * Delete a transient. Returns 0 for success/not existing, 1 for error for easy error counting
     */
    public function delete(string $name): int
    {
        if (!$this->get($name)) {
            return 0;
        }
        return (delete_transient(self::BASE . $name) ? 0 : 1);
    }

    /**
     * @return mixed
     */
    public function get(string $name)
    {
        return get_transient(self::BASE . $name);
    }

    public function set(string $name, $value): bool
    {
        return set_transient(self::BASE . $name, $value, HOUR_IN_SECONDS);
    }
}
