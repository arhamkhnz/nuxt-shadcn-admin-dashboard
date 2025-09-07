<script setup lang="ts">
import AppSidebar from "@/components/AppSidebar.vue";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
</script>

<template>
  <SidebarProvider>
    <AppSidebar variant="inset" collapsible="icon" />
    <SidebarInset>
      <header
        class="flex h-12 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12"
      >
        <div class="flex w-full items-center justify-between px-4 lg:px-6">
          <div class="flex items-center gap-1 lg:gap-2">
            <SidebarTrigger class="-ml-1" />
            <Separator orientation="vertical" class="mx-2 data-[orientation=vertical]:h-4" />
            <!-- <SearchDialog /> -->
          </div>
          <div class="flex items-center gap-2">
            <!-- <LayoutControls {...layoutPreferences} />
              <ThemeSwitcher />
              <AccountSwitcher users={users} /> -->
          </div>
        </div>
      </header>
      <div class="h-full p-4 md:p-6">
        <slot />
      </div>
    </SidebarInset>
  </SidebarProvider>
</template>
